
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMove from "../../src/components/MdiFileMove.vue";

test("MdiFileMove snapshot", () => {
  const wrapper = mount(MdiFileMove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
