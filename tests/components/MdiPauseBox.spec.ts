
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPauseBox from "../../src/components/MdiPauseBox.vue";

test("MdiPauseBox snapshot", () => {
  const wrapper = mount(MdiPauseBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
