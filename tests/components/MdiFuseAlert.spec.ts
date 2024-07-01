
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFuseAlert from "../../src/components/MdiFuseAlert.vue";

test("MdiFuseAlert snapshot", () => {
  const wrapper = mount(MdiFuseAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
