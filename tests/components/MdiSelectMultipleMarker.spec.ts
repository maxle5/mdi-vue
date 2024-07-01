
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectMultipleMarker from "../../src/components/MdiSelectMultipleMarker.vue";

test("MdiSelectMultipleMarker snapshot", () => {
  const wrapper = mount(MdiSelectMultipleMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
