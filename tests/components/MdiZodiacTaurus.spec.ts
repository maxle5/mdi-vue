
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacTaurus from "../../src/components/MdiZodiacTaurus.vue";

test("MdiZodiacTaurus snapshot", () => {
  const wrapper = mount(MdiZodiacTaurus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
