
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarBox from "../../src/components/MdiStarBox.vue";

test("MdiStarBox snapshot", () => {
  const wrapper = mount(MdiStarBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
