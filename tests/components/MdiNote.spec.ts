
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNote from "../../src/components/MdiNote.vue";

test("MdiNote snapshot", () => {
  const wrapper = mount(MdiNote, {});
  expect(wrapper.html()).toMatchSnapshot();
});
