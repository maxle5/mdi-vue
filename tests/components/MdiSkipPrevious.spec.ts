
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipPrevious from "../../src/components/MdiSkipPrevious.vue";

test("MdiSkipPrevious snapshot", () => {
  const wrapper = mount(MdiSkipPrevious, {});
  expect(wrapper.html()).toMatchSnapshot();
});
