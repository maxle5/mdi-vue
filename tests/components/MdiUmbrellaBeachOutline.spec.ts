
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUmbrellaBeachOutline from "../../src/components/MdiUmbrellaBeachOutline.vue";

test("MdiUmbrellaBeachOutline snapshot", () => {
  const wrapper = mount(MdiUmbrellaBeachOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
