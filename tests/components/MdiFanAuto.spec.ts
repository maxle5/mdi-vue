
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanAuto from "../../src/components/MdiFanAuto.vue";

test("MdiFanAuto snapshot", () => {
  const wrapper = mount(MdiFanAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
