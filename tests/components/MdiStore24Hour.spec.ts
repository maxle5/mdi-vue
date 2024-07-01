
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStore24Hour from "../../src/components/MdiStore24Hour.vue";

test("MdiStore24Hour snapshot", () => {
  const wrapper = mount(MdiStore24Hour, {});
  expect(wrapper.html()).toMatchSnapshot();
});
