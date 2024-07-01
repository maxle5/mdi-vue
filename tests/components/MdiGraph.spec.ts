
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGraph from "../../src/components/MdiGraph.vue";

test("MdiGraph snapshot", () => {
  const wrapper = mount(MdiGraph, {});
  expect(wrapper.html()).toMatchSnapshot();
});
