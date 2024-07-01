
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipNext from "../../src/components/MdiSkipNext.vue";

test("MdiSkipNext snapshot", () => {
  const wrapper = mount(MdiSkipNext, {});
  expect(wrapper.html()).toMatchSnapshot();
});
