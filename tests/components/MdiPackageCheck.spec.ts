
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageCheck from "../../src/components/MdiPackageCheck.vue";

test("MdiPackageCheck snapshot", () => {
  const wrapper = mount(MdiPackageCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
