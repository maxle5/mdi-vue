
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEvPlugCcs2 from "../../src/components/MdiEvPlugCcs2.vue";

test("MdiEvPlugCcs2 snapshot", () => {
  const wrapper = mount(MdiEvPlugCcs2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
