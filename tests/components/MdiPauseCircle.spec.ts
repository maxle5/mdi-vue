
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPauseCircle from "../../src/components/MdiPauseCircle.vue";

test("MdiPauseCircle snapshot", () => {
  const wrapper = mount(MdiPauseCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
