
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonNeutral from "../../src/components/MdiEmoticonNeutral.vue";

test("MdiEmoticonNeutral snapshot", () => {
  const wrapper = mount(MdiEmoticonNeutral, {});
  expect(wrapper.html()).toMatchSnapshot();
});
