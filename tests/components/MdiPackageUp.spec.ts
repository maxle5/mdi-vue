
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageUp from "../../src/components/MdiPackageUp.vue";

test("MdiPackageUp snapshot", () => {
  const wrapper = mount(MdiPackageUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
