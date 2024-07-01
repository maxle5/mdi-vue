
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDrag from "../../src/components/MdiDrag.vue";

test("MdiDrag snapshot", () => {
  const wrapper = mount(MdiDrag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
