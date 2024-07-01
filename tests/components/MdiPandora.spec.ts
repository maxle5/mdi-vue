
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPandora from "../../src/components/MdiPandora.vue";

test("MdiPandora snapshot", () => {
  const wrapper = mount(MdiPandora, {});
  expect(wrapper.html()).toMatchSnapshot();
});
