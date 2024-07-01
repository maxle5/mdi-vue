
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionSearch from "../../src/components/MdiSelectionSearch.vue";

test("MdiSelectionSearch snapshot", () => {
  const wrapper = mount(MdiSelectionSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
