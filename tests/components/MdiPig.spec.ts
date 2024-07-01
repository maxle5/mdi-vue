
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPig from "../../src/components/MdiPig.vue";

test("MdiPig snapshot", () => {
  const wrapper = mount(MdiPig, {});
  expect(wrapper.html()).toMatchSnapshot();
});
