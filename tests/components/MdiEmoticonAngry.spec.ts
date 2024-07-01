
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonAngry from "../../src/components/MdiEmoticonAngry.vue";

test("MdiEmoticonAngry snapshot", () => {
  const wrapper = mount(MdiEmoticonAngry, {});
  expect(wrapper.html()).toMatchSnapshot();
});
