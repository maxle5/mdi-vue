
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonKiss from "../../src/components/MdiEmoticonKiss.vue";

test("MdiEmoticonKiss snapshot", () => {
  const wrapper = mount(MdiEmoticonKiss, {});
  expect(wrapper.html()).toMatchSnapshot();
});
