
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDolphin from "../../src/components/MdiDolphin.vue";

test("MdiDolphin snapshot", () => {
  const wrapper = mount(MdiDolphin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
