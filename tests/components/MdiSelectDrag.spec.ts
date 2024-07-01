
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectDrag from "../../src/components/MdiSelectDrag.vue";

test("MdiSelectDrag snapshot", () => {
  const wrapper = mount(MdiSelectDrag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
