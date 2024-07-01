
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowShutterAlert from "../../src/components/MdiWindowShutterAlert.vue";

test("MdiWindowShutterAlert snapshot", () => {
  const wrapper = mount(MdiWindowShutterAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
