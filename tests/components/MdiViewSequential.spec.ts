
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewSequential from "../../src/components/MdiViewSequential.vue";

test("MdiViewSequential snapshot", () => {
  const wrapper = mount(MdiViewSequential, {});
  expect(wrapper.html()).toMatchSnapshot();
});
