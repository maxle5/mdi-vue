
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteSearch from "../../src/components/MdiNoteSearch.vue";

test("MdiNoteSearch snapshot", () => {
  const wrapper = mount(MdiNoteSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
