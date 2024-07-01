
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanPlus from "../../src/components/MdiFanPlus.vue";

test("MdiFanPlus snapshot", () => {
  const wrapper = mount(MdiFanPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
