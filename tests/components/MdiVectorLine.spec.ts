
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorLine from "../../src/components/MdiVectorLine.vue";

test("MdiVectorLine snapshot", () => {
  const wrapper = mount(MdiVectorLine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
