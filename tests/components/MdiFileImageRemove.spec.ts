
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImageRemove from "../../src/components/MdiFileImageRemove.vue";

test("MdiFileImageRemove snapshot", () => {
  const wrapper = mount(MdiFileImageRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
