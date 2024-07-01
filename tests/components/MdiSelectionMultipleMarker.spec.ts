
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionMultipleMarker from "../../src/components/MdiSelectionMultipleMarker.vue";

test("MdiSelectionMultipleMarker snapshot", () => {
  const wrapper = mount(MdiSelectionMultipleMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
