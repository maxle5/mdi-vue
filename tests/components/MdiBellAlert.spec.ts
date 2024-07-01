
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellAlert from "../../src/components/MdiBellAlert.vue";

test("MdiBellAlert snapshot", () => {
  const wrapper = mount(MdiBellAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
