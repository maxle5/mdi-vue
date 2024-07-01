
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanConnect from "../../src/components/MdiLanConnect.vue";

test("MdiLanConnect snapshot", () => {
  const wrapper = mount(MdiLanConnect, {});
  expect(wrapper.html()).toMatchSnapshot();
});
