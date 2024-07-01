
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowShutterAuto from "../../src/components/MdiWindowShutterAuto.vue";

test("MdiWindowShutterAuto snapshot", () => {
  const wrapper = mount(MdiWindowShutterAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
