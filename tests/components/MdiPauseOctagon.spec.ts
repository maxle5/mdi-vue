
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPauseOctagon from "../../src/components/MdiPauseOctagon.vue";

test("MdiPauseOctagon snapshot", () => {
  const wrapper = mount(MdiPauseOctagon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
