
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEvernote from "../../src/components/MdiEvernote.vue";

test("MdiEvernote snapshot", () => {
  const wrapper = mount(MdiEvernote, {});
  expect(wrapper.html()).toMatchSnapshot();
});
