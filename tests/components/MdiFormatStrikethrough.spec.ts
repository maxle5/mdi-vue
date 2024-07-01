
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatStrikethrough from "../../src/components/MdiFormatStrikethrough.vue";

test("MdiFormatStrikethrough snapshot", () => {
  const wrapper = mount(MdiFormatStrikethrough, {});
  expect(wrapper.html()).toMatchSnapshot();
});
