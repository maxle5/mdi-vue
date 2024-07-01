
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowShutterCog from "../../src/components/MdiWindowShutterCog.vue";

test("MdiWindowShutterCog snapshot", () => {
  const wrapper = mount(MdiWindowShutterCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
