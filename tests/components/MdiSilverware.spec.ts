
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSilverware from "../../src/components/MdiSilverware.vue";

test("MdiSilverware snapshot", () => {
  const wrapper = mount(MdiSilverware, {});
  expect(wrapper.html()).toMatchSnapshot();
});
