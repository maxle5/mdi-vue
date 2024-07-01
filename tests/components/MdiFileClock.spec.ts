
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileClock from "../../src/components/MdiFileClock.vue";

test("MdiFileClock snapshot", () => {
  const wrapper = mount(MdiFileClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
