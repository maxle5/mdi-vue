
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoCheck from "../../src/components/MdiVideoCheck.vue";

test("MdiVideoCheck snapshot", () => {
  const wrapper = mount(MdiVideoCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
