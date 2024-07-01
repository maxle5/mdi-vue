
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyRemoveCursor from "../../src/components/MdiMagnifyRemoveCursor.vue";

test("MdiMagnifyRemoveCursor snapshot", () => {
  const wrapper = mount(MdiMagnifyRemoveCursor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
