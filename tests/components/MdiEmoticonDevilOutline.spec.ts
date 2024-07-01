
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonDevilOutline from "../../src/components/MdiEmoticonDevilOutline.vue";

test("MdiEmoticonDevilOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonDevilOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
