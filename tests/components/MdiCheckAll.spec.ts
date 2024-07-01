
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckAll from "../../src/components/MdiCheckAll.vue";

test("MdiCheckAll snapshot", () => {
  const wrapper = mount(MdiCheckAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
