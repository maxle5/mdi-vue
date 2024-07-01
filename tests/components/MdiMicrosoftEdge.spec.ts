
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftEdge from "../../src/components/MdiMicrosoftEdge.vue";

test("MdiMicrosoftEdge snapshot", () => {
  const wrapper = mount(MdiMicrosoftEdge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
