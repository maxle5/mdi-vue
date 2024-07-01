
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionMarker from "../../src/components/MdiSelectionMarker.vue";

test("MdiSelectionMarker snapshot", () => {
  const wrapper = mount(MdiSelectionMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
