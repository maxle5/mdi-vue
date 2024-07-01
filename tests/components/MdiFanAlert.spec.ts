
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanAlert from "../../src/components/MdiFanAlert.vue";

test("MdiFanAlert snapshot", () => {
  const wrapper = mount(MdiFanAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
