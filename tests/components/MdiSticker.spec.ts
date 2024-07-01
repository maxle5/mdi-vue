
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSticker from "../../src/components/MdiSticker.vue";

test("MdiSticker snapshot", () => {
  const wrapper = mount(MdiSticker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
