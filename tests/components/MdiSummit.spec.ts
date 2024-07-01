
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSummit from "../../src/components/MdiSummit.vue";

test("MdiSummit snapshot", () => {
  const wrapper = mount(MdiSummit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
