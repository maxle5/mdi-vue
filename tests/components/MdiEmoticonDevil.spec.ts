
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonDevil from "../../src/components/MdiEmoticonDevil.vue";

test("MdiEmoticonDevil snapshot", () => {
  const wrapper = mount(MdiEmoticonDevil, {});
  expect(wrapper.html()).toMatchSnapshot();
});
