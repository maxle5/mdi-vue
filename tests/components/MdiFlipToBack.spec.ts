
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlipToBack from "../../src/components/MdiFlipToBack.vue";

test("MdiFlipToBack snapshot", () => {
  const wrapper = mount(MdiFlipToBack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
