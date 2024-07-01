
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorUnion from "../../src/components/MdiVectorUnion.vue";

test("MdiVectorUnion snapshot", () => {
  const wrapper = mount(MdiVectorUnion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
